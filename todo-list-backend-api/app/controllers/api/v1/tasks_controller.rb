class Api::V1::TasksController < ApplicationController
  before_action :set_task, only: [:update]

  def index
    tasks = Task.all.reverse_order
    render json: tasks.to_json
  end

  def update
    if @task.update(task_params)
      render json: @task.to_json
    end
  end

  def create
    task = Task.create(task_params)
    if task.save
      render json: task.to_json
    end
  end

  private

  def set_task
    @task = Task.find(params[:id])
  end

  def task_params
    params.require(:task).permit(:title, :description, :done)
  end
end
