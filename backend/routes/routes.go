package routes

import (
    "github.com/clim-bot/auth/controllers"
    "github.com/clim-bot/auth/middleware"

    "github.com/gin-gonic/gin"
)

func SetupRoutes(router *gin.Engine) {
    auth := router.Group("/auth")
    {
        auth.POST("/register", controllers.Register)
        auth.POST("/login", controllers.Login)
        auth.POST("/forgot-password", controllers.ForgotPassword)
		auth.POST("/reset-password", controllers.ResetPassword)
        auth.POST("/activate-account", controllers.ActivateAccount)
    }

    protected := router.Group("/")
    protected.Use(middleware.Auth())
    {
        protected.GET("/profile", controllers.Profile)
        protected.POST("/profile/change-password", controllers.ChangePassword)
    }
}
