export const images = {
  hero: "https://images.pexels.com/photos/17134085/pexels-photo-17134085.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  kitchen: "https://images.pexels.com/photos/7534297/pexels-photo-7534297.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  warmKitchen: "https://images.pexels.com/photos/7045356/pexels-photo-7045356.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  brightKitchen: "https://images.pexels.com/photos/7168051/pexels-photo-7168051.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  blueKitchen: "https://images.pexels.com/photos/11701150/pexels-photo-11701150.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  minimalKitchen: "https://images.pexels.com/photos/3847520/pexels-photo-3847520.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  blackKitchen: "https://images.pexels.com/photos/4832505/pexels-photo-4832505.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  workshop: "https://images.pexels.com/photos/8985466/pexels-photo-8985466.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  technician: "https://images.pexels.com/photos/8985515/pexels-photo-8985515.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  diagnostics: "https://images.pexels.com/photos/12203702/pexels-photo-12203702.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  circuit: "https://images.pexels.com/photos/38145576/pexels-photo-38145576.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  tools: "https://images.pexels.com/photos/19582317/pexels-photo-19582317.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  wrench: "https://images.pexels.com/photos/9607054/pexels-photo-9607054.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  hands: "https://images.pexels.com/photos/7446650/pexels-photo-7446650.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  pizza: "https://images.pexels.com/photos/29626981/pexels-photo-29626981.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  bread: "https://images.pexels.com/photos/37290070/pexels-photo-37290070.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  customerOne: "https://images.pexels.com/photos/29810657/pexels-photo-29810657.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  customerTwo: "https://images.pexels.com/photos/5869609/pexels-photo-5869609.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  customerThree: "https://images.pexels.com/photos/6684781/pexels-photo-6684781.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  mechanic: "https://images.pexels.com/photos/7807035/pexels-photo-7807035.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  team: "https://images.pexels.com/photos/12555018/pexels-photo-12555018.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  chef: "https://images.pexels.com/photos/38539266/pexels-photo-38539266.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
  fire: "https://images.pexels.com/photos/6697476/pexels-photo-6697476.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
} as const;

export const services = [
  ["Не нагревается", "Проверим нагревательный элемент, термостат и плату управления.", "от 1 490 ₽", "Flame"],
  ["Не включается", "Найдём причину в питании, предохранителе, замке или модуле.", "от 990 ₽", "Power"],
  ["Плохо греет", "Настроим температуру и проверим равномерность нагрева.", "от 890 ₽", "Thermometer"],
  ["Не работает режим", "Восстановим конвекцию, гриль, подсветку и режимы выпечки.", "от 1 290 ₽", "Settings2"],
  ["Не закрывается дверца", "Заменим петли, уплотнитель или внутреннее стекло.", "от 1 190 ₽", "DoorOpen"],
  ["Выбивает автомат", "Безопасно найдём короткое замыкание и устраним неисправность.", "от 1 590 ₽", "Zap"],
] as const;

export const steps = [
  ["01", "Оставьте заявку", "Опишите проблему в форме или позвоните — ответим за 2 минуты."],
  ["02", "Мастер приедет", "Подберём удобное время и приедем с инструментом и запчастями."],
  ["03", "Проведём диагностику", "Объясним причину поломки и назовём точную стоимость до ремонта."],
  ["04", "Вернём комфорт", "Починим технику, проверим все режимы и дадим гарантию."],
] as const;

export const brands = ["Bosch", "Electrolux", "Gorenje", "Samsung", "Hansa", "Miele", "Siemens", "Beko"];
export const timeSlots = ["08:00–10:00", "10:00–12:00", "12:00–14:00", "14:00–16:00", "16:00–18:00", "18:00–20:00", "20:00–22:00"];
export const faqs = [
  ["Сколько стоит диагностика?", "Диагностика бесплатна при согласии на ремонт. Только выезд без ремонта — от 500 ₽."],
  ["Вы ремонтируете встроенные духовые шкафы?", "Да, работаем со всеми типами: встраиваемыми, отдельностоящими, электрическими и газовыми моделями."],
  ["Какая гарантия на работу?", "Даём гарантию до 12 месяцев на выполненные работы и установленные детали."],
  ["Можно ли вызвать мастера вечером?", "Да, работаем ежедневно с 8:00 до 22:00. Выберите слот в форме бронирования."],
] as const;
export const testimonials = [
  ["Елена Воронова", "Москва", "Мастер приехал в тот же день, быстро нашёл причину и заменил нагреватель. Всё аккуратно, духовка снова печёт идеально!", images.customerOne],
  ["Алексей Смирнов", "Химки", "Цену назвали до начала работ и она не изменилась. Специалист приехал вовремя и работал чисто.", images.customerTwo],
  ["Марина Котова", "Мытищи", "Спасибо за срочный выезд! Ремонт дверцы занял меньше часа. Рекомендую этот сервис.", images.customerThree],
] as const;
