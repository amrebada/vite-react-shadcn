package main

import (
	"embed"
	"flag"
	"fmt"
	"net/http"

	"github.com/amrebada/go-modules/core"
	"github.com/amrebada/go-modules/modules"
	"github.com/gofiber/fiber/v2"
	"github.com/gofiber/fiber/v2/middleware/filesystem"
)

var (

	//go:embed dist/index.html
	indexFile string

	//go:embed dist/assets/*
	assets embed.FS
)

func main() {

	isMigrate := false
	isSwagger := false
	env := "dev"

	flag.BoolVar(&isMigrate, "m", false, "auto migrate database")
	flag.BoolVar(&isSwagger, "sw", false, "generate swagger")
	flag.StringVar(&env, "env", "dev", "identify which environment to load from {.env} file [.env.prod, .env.dev, .env.test, .env]")
	flag.Parse()
	core.NewConfig(core.Stage(env)).
		SetMigrate(isMigrate).
		SetSwagger(isSwagger)

	app := core.NewServer()
	app.MainModule = modules.NewAppModule()
	app.RegisterMainModule()
	app.Engine.Use("/assets", filesystem.New(filesystem.Config{
		Root:       http.FS(assets),
		PathPrefix: "dist/assets",
		Browse:     true,
	}))
	app.Engine.Use("/", func(c *fiber.Ctx) error {
		c.Set("Content-Type", "text/html")
		return c.SendString(indexFile)
	})

	err := app.Start()
	if err != nil {
		fmt.Println(err)
	}

}
