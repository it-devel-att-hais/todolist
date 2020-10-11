FactoryBot.define do
  factory :task do
    sequence(:title) { |n| "Title #{n}"}
    sequence(:description) { |n| "Description #{n}"}
  end
end
