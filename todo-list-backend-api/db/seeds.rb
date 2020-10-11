20.times do |n|
  done = n % 2 == 0
  Task.create(title: "Title #{n}", description: "Description #{n}", done: done)
end
