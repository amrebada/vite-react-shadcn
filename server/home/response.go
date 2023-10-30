package home

import (
	"github.com/amrebada/go-modules/core"
	"github.com/gofiber/fiber/v2"
)

const (
	CANNOT_PARSE_BODY       = 3001
	OAUTH_TOKEN_NOT_CORRECT = 4001
	USER_SERVER_ERROR       = 5001
)

func ErrorResponse(errs []error, code int) *fiber.Map {
	return &fiber.Map{
		"code":    code,
		"errors":  core.ErrorsToJSON(errs),
		"success": false,
	}
}
