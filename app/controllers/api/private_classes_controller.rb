class Api::PrivateClassesController < ApplicationController
  before_action :authorize
  
    def index
        private_classes = PrivateClass.all.order('created_at DESC')
        render json: private_classes, status: :ok
      end
      
      def show
        private_class = PrivateClass.find(params[:id])
        render json: private_class
      end

      def create
        private_class = PrivateClass.create!(private_class_params)
        render json: private_class, status: :ok
      end

      private


      def authorize
        return render json: { error: "Not authorized" }, status: :unauthorized unless session.include? :user_id
      end

      def private_class_params
        params.permit(:goal, :date, :user_id)
      end
end
