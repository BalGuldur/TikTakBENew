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

ActiveRecord::Schema.define(version: 20170213100934) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "action_logs", force: :cascade do |t|
    t.string   "controller"
    t.string   "action"
    t.integer  "employee_id"
    t.text     "parameters"
    t.boolean  "success"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.integer  "company_id"
    t.index ["company_id"], name: "index_action_logs_on_company_id", using: :btree
    t.index ["employee_id"], name: "index_action_logs_on_employee_id", using: :btree
  end

  create_table "companies", force: :cascade do |t|
    t.string   "comp_hash"
    t.string   "title"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "employees", force: :cascade do |t|
    t.string   "position"
    t.integer  "user_id"
    t.string   "fullname"
    t.string   "emp_hash"
    t.string   "nickname"
    t.integer  "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "photo"
    t.string   "email"
    t.boolean  "deleted"
    t.datetime "deleted_at"
    t.index ["company_id"], name: "index_employees_on_company_id", using: :btree
    t.index ["deleted"], name: "index_employees_on_deleted", using: :btree
    t.index ["user_id"], name: "index_employees_on_user_id", using: :btree
  end

  create_table "halls", force: :cascade do |t|
    t.integer  "location_id"
    t.string   "title"
    t.boolean  "deleted"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.datetime "deleted_at"
    t.index ["deleted"], name: "index_halls_on_deleted", using: :btree
    t.index ["location_id"], name: "index_halls_on_location_id", using: :btree
  end

  create_table "locations", force: :cascade do |t|
    t.string   "title"
    t.boolean  "deleted"
    t.integer  "company_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "loc_hash"
    t.datetime "deleted_at"
    t.index ["company_id"], name: "index_locations_on_company_id", using: :btree
    t.index ["deleted"], name: "index_locations_on_deleted", using: :btree
  end

  create_table "menu_categories", force: :cascade do |t|
    t.string   "title"
    t.boolean  "deleted"
    t.datetime "deleted_at"
    t.integer  "menu_department_id"
    t.datetime "created_at",         null: false
    t.datetime "updated_at",         null: false
    t.index ["deleted"], name: "index_menu_categories_on_deleted", using: :btree
    t.index ["menu_department_id"], name: "index_menu_categories_on_menu_department_id", using: :btree
  end

  create_table "menu_departments", force: :cascade do |t|
    t.string   "title"
    t.boolean  "deleted"
    t.datetime "deleted_at"
    t.integer  "location_id"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.index ["deleted"], name: "index_menu_departments_on_deleted", using: :btree
    t.index ["location_id"], name: "index_menu_departments_on_location_id", using: :btree
  end

  create_table "menu_items", force: :cascade do |t|
    t.string   "title"
    t.integer  "price"
    t.integer  "menu_category_id"
    t.boolean  "deleted"
    t.datetime "deleted_at"
    t.datetime "created_at",       null: false
    t.datetime "updated_at",       null: false
    t.index ["deleted"], name: "index_menu_items_on_deleted", using: :btree
    t.index ["menu_category_id"], name: "index_menu_items_on_menu_category_id", using: :btree
  end

  create_table "omni_auth_accounts", force: :cascade do |t|
    t.string   "provider"
    t.string   "uid"
    t.integer  "user_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string   "photo"
    t.index ["user_id"], name: "index_omni_auth_accounts_on_user_id", using: :btree
  end

  create_table "places", force: :cascade do |t|
    t.string   "title"
    t.integer  "hall_id"
    t.integer  "capacity"
    t.boolean  "deleted"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.datetime "deleted_at"
    t.index ["deleted"], name: "index_places_on_deleted", using: :btree
    t.index ["hall_id"], name: "index_places_on_hall_id", using: :btree
  end

  create_table "places_visits", id: false, force: :cascade do |t|
    t.integer "visit_id", null: false
    t.integer "place_id", null: false
    t.index ["place_id", "visit_id"], name: "index_places_visits_on_place_id_and_visit_id", using: :btree
    t.index ["visit_id", "place_id"], name: "index_places_visits_on_visit_id_and_place_id", using: :btree
  end

  create_table "users", force: :cascade do |t|
    t.string   "email",                  default: "", null: false
    t.string   "encrypted_password",     default: "", null: false
    t.string   "reset_password_token"
    t.datetime "reset_password_sent_at"
    t.datetime "remember_created_at"
    t.integer  "sign_in_count",          default: 0,  null: false
    t.datetime "current_sign_in_at"
    t.datetime "last_sign_in_at"
    t.inet     "current_sign_in_ip"
    t.inet     "last_sign_in_ip"
    t.datetime "created_at",                          null: false
    t.datetime "updated_at",                          null: false
    t.string   "fullname"
    t.datetime "deleted_at"
    t.boolean  "deleted"
    t.index ["deleted"], name: "index_users_on_deleted", using: :btree
    t.index ["email"], name: "index_users_on_email", unique: true, using: :btree
    t.index ["reset_password_token"], name: "index_users_on_reset_password_token", unique: true, using: :btree
  end

  create_table "visits", force: :cascade do |t|
    t.integer  "qty_people"
    t.boolean  "opened"
    t.datetime "opened_at"
    t.boolean  "booked"
    t.datetime "book_start"
    t.boolean  "closed"
    t.datetime "closed_at"
    t.integer  "location_id"
    t.boolean  "deleted"
    t.datetime "deleted_at"
    t.datetime "created_at",  null: false
    t.datetime "updated_at",  null: false
    t.datetime "booked_at"
    t.index ["booked"], name: "index_visits_on_booked", using: :btree
    t.index ["closed"], name: "index_visits_on_closed", using: :btree
    t.index ["deleted"], name: "index_visits_on_deleted", using: :btree
    t.index ["location_id"], name: "index_visits_on_location_id", using: :btree
    t.index ["opened"], name: "index_visits_on_opened", using: :btree
  end

  add_foreign_key "action_logs", "companies"
  add_foreign_key "action_logs", "employees"
  add_foreign_key "employees", "companies"
  add_foreign_key "employees", "users"
  add_foreign_key "halls", "locations"
  add_foreign_key "locations", "companies"
  add_foreign_key "menu_categories", "menu_departments"
  add_foreign_key "menu_departments", "locations"
  add_foreign_key "menu_items", "menu_categories"
  add_foreign_key "omni_auth_accounts", "users"
  add_foreign_key "places", "halls"
  add_foreign_key "visits", "locations"
end
