require 'rails_helper'

RSpec.describe "Api::V1::Tasks", type: :request do
  API_V1_TASK_PATH = "/api/v1/tasks"

  describe "POST #{API_V1_TASK_PATH}" do
    context "success create task" do
      it "should create task with title and description" do
        requires_data = {
            task: {
                title: 'Hello world',
                description: 'Great description',
            }
        }
        post API_V1_TASK_PATH, params: requires_data

        expect(response).to have_http_status(:success)
        expect(Task.count).to eq(1)

        new_task =  JSON.parse(response.body)
        expect(new_task['title']).to eq(requires_data[:task][:title])
        expect(new_task['description']).to eq(requires_data[:task][:description])
        expect(new_task['done']).to eq(false)
      end
    end
  end

  describe "GET #{API_V1_TASK_PATH}" do
    COMMON_NUMBER_OF_TASKS = 10

    let(:generate_tasks) do
      create_list(:task, COMMON_NUMBER_OF_TASKS)
    end

    context "success get list of tasks" do

      it "should return list of tasks" do
        generate_tasks
        get API_V1_TASK_PATH

        expect(response).to have_http_status(:success)

        tasks =  JSON.parse(response.body)
        expect(tasks.length).to eq(COMMON_NUMBER_OF_TASKS)
        tasks.each do |task|
          expect(task['title']).to start_with 'Title'
          expect(task['description']).to start_with 'Description'
        end
      end
    end
  end
end
