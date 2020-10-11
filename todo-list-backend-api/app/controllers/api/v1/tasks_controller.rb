class Api::V1::TasksController < ApplicationController

  def index
    tasks = Task.all.reverse_order
    render json: tasks.to_json
  end

  def create
    task = Task.create(task_params)
    if task.save
      render json: task.to_json
    end
  end

  private

  def task_params
    params.require(:task).permit(:title, :description)
  end
end
