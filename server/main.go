package main

import (
	"encoding/json"
	"fmt"
	"net/http"
)

func main() {
	http.HandleFunc("/rates", makeHandleFunc(handleSumRate))

	fmt.Println("Listening on :8080")
	http.ListenAndServe(":8080", nil)
}

type apiFunc func(http.ResponseWriter, *http.Request) error

func makeHandleFunc(fn apiFunc) http.HandlerFunc {
	return func(w http.ResponseWriter, r *http.Request) {
		if err := fn(w, r); err != nil {
			writeJSON(w, http.StatusInternalServerError, map[string]string{"error": err.Error()})
		}
	}
}

func writeJSON(w http.ResponseWriter, code int, v any) error {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(code)
	return json.NewEncoder(w).Encode(v)
}

func handleSumRate(w http.ResponseWriter, r *http.Request) error {
	return nil
}