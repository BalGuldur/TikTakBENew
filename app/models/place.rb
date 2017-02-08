class Place < ApplicationRecord
  default_scope { where(deleted: false) }

  belongs_to :hall

  def self.front_view
    # TODO: Проверить количество SQL запросов
    places = all
    result = {}
    places.each {|place| result.merge! place.front_view}
    result
  end

  def front_view
    {self.id => self.as_json}
  end

  def safe_destroy
    destroy
  end

  # def self.front_view
  #   all.as_json
  # end
end
