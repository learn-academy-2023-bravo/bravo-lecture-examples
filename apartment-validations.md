<!-- use the let method to set user as variable -->

```ruby
let(:user) { User.create(email: "testing@example.com", password:"password", password_confirmation:"password")}

it "should have a valid street " do
  apartment = user.apartments.create(
    city: "London",
    unit: "22b",
    state: "England",
    square_footage: 1000,
    price:"5000",
    bedrooms: 1,
    bathrooms: 1.5,
    pets:"yes",
    image: "https://exej2saedb8.exactdn.com/wp-content/uploads/2022/02/Screen-Shot-2022-02-04-at-2.28.40-PM.png?strip=all&lossy=1&fit=1440%2C781&ssl=1"
  )

  expect(apartment.errors[:street]).to include "can't be blank"
end