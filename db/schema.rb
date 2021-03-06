# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20131204160256) do

  create_table "product_types", force: true do |t|
    t.string   "product_type_name"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "product_types", ["product_type_name"], name: "index_product_types_on_product_type_name", unique: true

  create_table "products", force: true do |t|
    t.integer  "product_type_id",                   null: false
    t.string   "product_name",        default: "",  null: false
    t.string   "product_description", default: ""
    t.float    "product_cost",        default: 0.0, null: false
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "products", ["product_cost"], name: "index_products_on_product_cost"
  add_index "products", ["product_description"], name: "index_products_on_product_description"
  add_index "products", ["product_name"], name: "index_products_on_product_name", unique: true
  add_index "products", ["product_type_id"], name: "index_products_on_product_type_id"

  create_table "users", force: true do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.string   "current_sign_in_ip"
    t.string   "last_sign_in_ip"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  add_index "users", ["email"], name: "index_users_on_email", unique: true
  add_index "users", ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true

end
