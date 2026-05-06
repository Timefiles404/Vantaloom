package app

import "context"

type App struct {
	ctx context.Context
}

func New() *App {
	return &App{}
}

func (app *App) Startup(ctx context.Context) {
	app.ctx = ctx
}
