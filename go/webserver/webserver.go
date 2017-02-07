package main

import (
	"flag"
	"log"
	"net/http"
)

func main() {
	var addr, dir string
	flag.StringVar(&addr, "addr", ":8080", "listen address")
	flag.StringVar(&dir, "dir", ".", "directory to serve")
	flag.Parse()

	http.Handle("/", http.FileServer(http.Dir(dir)))
	if err := http.ListenAndServe(addr, nil); err != nil {
		log.Println(err)
	}
}
