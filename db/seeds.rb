# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

50.times do
  user = User.create!(email: Faker::Internet.email, password: "123546", name: Faker::Name.name, rating: Faker::Number.within(range: 0.0..5.0), username: Faker::Internet.username, location: Faker::Address.city)
  puts "User created #{user.email}"
  job = Job.create!(profession: Faker::Construction.trade, rate: Faker::Number.within(range: 8..75), description: Faker::Lorem.paragraphs.first, location: Faker::Address.city, user: user)
end
