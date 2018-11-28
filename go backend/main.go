// main.go
package main

func main() {
	a := App{}
	a.Initialize("admin", "", "fukuro")

	a.Run(":3000")
}
