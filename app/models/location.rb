class Location < ApplicationRecord
  acts_as_tenant :company
  acts_as_paranoid column: :deleted, sentinel_value: false

  before_save :set_default

  belongs_to :company
  has_many :halls, dependent: :destroy
  has_many :places, through: :halls
  has_many :employees
  has_many :action_logs, through: :employees
  has_many :menu_departments, dependent: :destroy
  has_many :menu_categories, through: :menu_departments
  has_many :menu_items, through: :menu_categories
  has_many :visits, dependent: :destroy

  def visits_on_day(date_time)
    visits.active(work_day(date_time))
  end

  def visits_today
    visits_on_day(DateTime.now)
  end

  private

  def work_day(date_time)
    open_time = self.open_time.to_datetime
    if open_time.present?
      open_time = DateTime.new(date_time.year, date_time.month, date_time.day, open_time.hour,
                               open_time.minute, open_time.second, open_time.zone)
      end_time = open_time + 1.day
      return open_time..end_time
    else
      raise "Не задано время работы для данного заведения"
    end
  end

  def set_default
    # if deleted.nil?
    #   update deleted: false
    # end
    if loc_hash.nil?
      update loc_hash: SecureRandom.urlsafe_base64(20)
    end
    update open_time: DateTime.now.change({hour: 9, min: 00, sec: 00}) if open_time.nil?
  end

  def paranoia_restore_attributes
    {
        deleted_at: nil,
        deleted: false
    }
  end

  def paranoia_destroy_attributes
    {
        deleted_at: current_time_from_proper_timezone,
        deleted: true
    }
  end
end
