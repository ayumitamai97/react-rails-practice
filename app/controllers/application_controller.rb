class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session
  # セッションの認証がないので、一致しない場合はセッションを空にする、に変更する。
end
