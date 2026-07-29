.PHONY: default server

default: server

static/resume.pdf:
	xelatex -interaction=nonstopmode -output-directory=static resume.tex

server: static/resume.pdf
	HUGO_BASEURL=http://localhost:1313/ hugo server --buildDrafts --bind 0.0.0.0 --port 1313
