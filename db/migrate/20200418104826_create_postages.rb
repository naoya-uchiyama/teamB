class CreatePostages < ActiveRecord::Migration[5.2]
  def change
    create_table :postages do |t|
      t.text :payer
      t.timestamps
    end
  end
end
