# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

professions = [ "Plumbing", "Moving", "Shopping", "Electrical", "Carpentry", "Cleaning", "Painting", "General Helper", "Cooking", "Landscaping", "Gardening and Removal", "Computer Technician", "Car Mechanic", "Sewing", "Furniture Making", "Groundworks" ]

300.times do
  user = User.create!(email: Faker::Internet.email, password: "123546", name: Faker::Name.name, rating: Faker::Number.within(range: 0.0..5.0), username: Faker::Internet.username, location: Faker::Address.city)
  puts "User created #{user.email}"
  5.times do
    job = Job.create!(profession: professions.sample, rate: Faker::Number.within(range: 8..49), description: Faker::Lorem.paragraphs.first, location: Faker::Address.city, user: user)
  end
end
