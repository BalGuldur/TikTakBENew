# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Создаем компанию и выбираем для заполнения данных
company = Company.find_or_create_by(title: 'CrazyCats24')
ActsAsTenant.current_tenant = company

# Создаем одну учетку
# TODO: добавить заведение к employee
Employee.find_or_create_by(
            position: "IT Админ",
            fullname: "Александр Крылов",
            nickname: "admin",
            emp_hash: "admin_hash",
)

# Создаем компанию и выбираем для заполнения данных
company = Company.find_or_create_by(title: 'TestSecondCompany')
ActsAsTenant.current_tenant = company

# Создаем одну учетку
# TODO: добавить заведение к employee
Employee.find_or_create_by(
    position: "IT Админ",
    fullname: "Александр Крылов",
    nickname: "admin",
    emp_hash: "admin_hash2",
)
