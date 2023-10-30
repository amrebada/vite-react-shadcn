package main

import (
	"embed"
	"flag"
	"fmt"

	"github.com/amrebada/go-modules/core"
	"github.com/amrebada/go-modules/modules"
)

var (
	//go:embed dist/*
	dist embed.FS
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
	app.Engine.Static("/", "./dist")
	err := app.Start()
	if err != nil {
		fmt.Println(err)
	}

}
