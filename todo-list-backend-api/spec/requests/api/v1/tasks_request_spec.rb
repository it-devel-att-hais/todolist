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
      end
    end
  end
end
