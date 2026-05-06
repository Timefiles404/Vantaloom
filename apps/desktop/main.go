package main

import (
	"embed"
	"log"

	"github.com/Timefiles404/Vantaloom/apps/desktop/internal/app"
	"github.com/wailsapp/wails/v2"
	"github.com/wailsapp/wails/v2/pkg/options"
	"github.com/wailsapp/wails/v2/pkg/options/assetserver"
)

//go:embed all:frontend/dist
var assets embed.FS

func main() {
	desktopApp := app.New()

	err := wails.Run(&options.App{
		Title:     "Vantaloom",
		Width:     1280,
		Height:    820,
		MinWidth:  960,
		MinHeight: 640,
		Frameless: true,
		AssetServer: &assetserver.Options{
			Assets: assets,
		},
		Bind: []interface{}{
			desktopApp,
		},
	})
	if err != nil {
		log.Fatal(err)
	}
}
