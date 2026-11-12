---
title: "Reaching Proton from Egypt Without Routing Everything Through a VPN"
date: 2026-11-12T12:00:00+02:00
draft: false
tags: ["networking", "nixos", "sing-box", "cloudflare-warp", "privacy"]
categories: ["engineering"]
description: "Proton Mail, Pass and VPN time out on my network. I routed only Proton domains through Cloudflare WARP over MASQUE with sing-box on NixOS, and left the rest of the traffic alone."
image: "/images/blog/proton-blocked-in-egypt.png"
imageAlt: "Hand-drawn card: Reaching Proton from Egypt, with an app, sing-box and WARP sketch"
---

Proton Mail, Pass and Proton VPN stopped loading on my network in Egypt. I wanted them back without sending my whole connection through a tunnel.

## Finding out what is blocked

DNS answered normally, so the names were not poisoned. `proton.me`, `pass.proton.me` and `protonvpn.com` resolved to real addresses and then timed out on TCP. That means the block is by IP address.

Two Proton hosts (`account.proton.me`, `mail.proton.me`) still answered, so the block is partial and per address.

## What did not work

Plain WireGuard to Cloudflare WARP never completed a handshake. I tried four endpoint addresses on seven ports, 28 combinations in total, and none of them got a handshake. The protocol itself is dropped, not one address or port.

## What worked

The current WARP client does not use WireGuard. It uses MASQUE, which is HTTP/3 over QUIC on UDP 443. On the wire it looks like ordinary HTTPS traffic.

`usque` is an open-source MASQUE client. It registers a free anonymous WARP device and runs as a local SOCKS5 proxy. Through it, `proton.me`, `pass.proton.me` and `protonvpn.com` returned 200.

## Sending only Proton through it

A proxy on its own is not enough, because desktop apps do not all honour proxy settings. sing-box runs a tun interface, sniffs the domain of each connection, and applies routing rules:

![Flow chart: an app's traffic enters the sing-box tun, which sniffs the domain. Proton domains go to the usque SOCKS5 proxy, then Cloudflare WARP over MASQUE, then Proton. Everything else goes direct to the normal internet.](/images/blog/proton-flow.svg)

The rule matches domain suffixes: `proton.me`, `protonvpn.com`, `protonvpn.ch`, `pm.me` and a few more. Matching by domain means it keeps working when Proton changes its IP addresses. Private ranges and the Tailscale range stay direct.

Both services run as NixOS systemd units. The WARP credentials live in a root-owned state directory and are not in the repository.

## Three mistakes that broke the connection

The first two attempts took my whole network down. I had to stop the service each time to get back online.

1. **DNS hijacking.** I let sing-box capture DNS queries. Its local resolver then sent them out of the wrong interface to Tailscale's resolver, and every name lookup failed. Proton is blocked by IP, not DNS, so I removed the hijack.
2. **The tun stack.** With the `mixed` stack, TCP connections never reached sing-box and only UDP did. Switching to the user-space `gvisor` stack fixed it.
3. **usque inside its own tunnel.** usque keeps one long QUIC session to Cloudflare. When the tun captured that session, it stalled with "no recent network activity" and Proton traffic hung. Giving usque a fixed user ID and excluding that ID from the tun fixed it.

I also changed the tun address from `172.19.0.1/30`, because it overlapped a Docker bridge on `172.19.0.0/16`.

## What each party can see

Proton traffic is TLS to Proton, so the tunnel carries encrypted data it cannot read. Pass vaults and authenticator secrets are end-to-end encrypted with keys derived from the account password.

- My ISP sees QUIC traffic to Cloudflare, not which Proton service.
- Cloudflare sees the Proton addresses I contact, with timing and volume. That metadata is the real cost.
- The WARP device is free and anonymous. It has no link to any Proton account.

## Result

After the final change, Proton Mail, Pass and the VPN site load. GitHub still loads directly, my exit IP is unchanged, and Tailscale keeps working. The tunnel starts at boot and costs nothing to run.

If Egypt later blocks QUIC to Cloudflare, `usque` can tunnel over HTTP/2 on TCP and TLS instead.
