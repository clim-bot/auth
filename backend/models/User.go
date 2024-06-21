package models

import "time"

type User struct {
	ID uint	`gorm:"primaryKey;autoIncrement" json:"id"`
	Name string `json:"name"`
	Email string `json:"email"`
	Password string `json:"-"`
	ActivationToken string `json:"="`
	Activated	bool `json:"-"`
	ResetToken string `json:"-"`
	ResetTokenExpiry time.Time `json:"-"`
	CreatedAt time.Time `json:"-"`
	UpdatedAt time.Time `json:"-"`
}