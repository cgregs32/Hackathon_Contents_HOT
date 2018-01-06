50.times do
  Menu.create(
    item: Faker::Food.dish,
    price: Faker::Commerce.price,
  )
end

puts 'Menu Items created'
