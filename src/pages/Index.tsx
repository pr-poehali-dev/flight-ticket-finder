import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('search');
  const [searchFrom, setSearchFrom] = useState('');
  const [searchTo, setSearchTo] = useState('');
  const [departureDate, setDepartureDate] = useState('');
  const [returnDate, setReturnDate] = useState('');
  const [passengers, setPassengers] = useState(1);

  const mockFlights = [
    {
      id: 1,
      airline: 'Аэрофлот',
      from: 'Москва',
      to: 'Санкт-Петербург',
      departure: '08:30',
      arrival: '10:15',
      duration: '1ч 45м',
      price: 4500,
      type: 'Эконом'
    },
    {
      id: 2,
      airline: 'S7 Airlines',
      from: 'Москва',
      to: 'Санкт-Петербург',
      departure: '14:20',
      arrival: '16:05',
      duration: '1ч 45м',
      price: 3800,
      type: 'Эконом'
    },
    {
      id: 3,
      airline: 'Победа',
      from: 'Москва',
      to: 'Санкт-Петербург',
      departure: '19:40',
      arrival: '21:25',
      duration: '1ч 45м',
      price: 2900,
      type: 'Эконом'
    }
  ];

  const mockHistory = [
    {
      id: 1,
      route: 'Москва → Сочи',
      date: '15 июня 2024',
      status: 'Завершен',
      price: 8500
    },
    {
      id: 2,
      route: 'Санкт-Петербург → Калининград',
      date: '3 мая 2024',
      status: 'Завершен',
      price: 6200
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Icon name="Plane" size={24} className="text-blue-600" />
              <h1 className="text-xl font-bold text-gray-900">FlySearch</h1>
            </div>
            <nav className="flex space-x-8">
              <Button
                variant={activeTab === 'search' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('search')}
                className="flex items-center space-x-2"
              >
                <Icon name="Search" size={16} />
                <span>Поиск</span>
              </Button>
              <Button
                variant={activeTab === 'profile' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('profile')}
                className="flex items-center space-x-2"
              >
                <Icon name="User" size={16} />
                <span>Профиль</span>
              </Button>
              <Button
                variant={activeTab === 'history' ? 'default' : 'ghost'}
                onClick={() => setActiveTab('history')}
                className="flex items-center space-x-2"
              >
                <Icon name="History" size={16} />
                <span>История</span>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search Tab */}
        {activeTab === 'search' && (
          <div className="space-y-8">
            {/* Hero Section */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Найдите идеальный авиабилет
              </h2>
              <p className="text-xl text-gray-600">
                Сравнивайте цены, выбирайте лучшие предложения
              </p>
            </div>

            {/* Search Form */}
            <Card className="bg-white shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center space-x-2">
                  <Icon name="Search" size={20} />
                  <span>Поиск авиабилетов</span>
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="from">Откуда</Label>
                    <Input
                      id="from"
                      placeholder="Москва"
                      value={searchFrom}
                      onChange={(e) => setSearchFrom(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="to">Куда</Label>
                    <Input
                      id="to"
                      placeholder="Санкт-Петербург"
                      value={searchTo}
                      onChange={(e) => setSearchTo(e.target.value)}
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="departure">Дата вылета</Label>
                    <Input
                      id="departure"
                      type="date"
                      value={departureDate}
                      onChange={(e) => setDepartureDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="return">Дата возвращения</Label>
                    <Input
                      id="return"
                      type="date"
                      value={returnDate}
                      onChange={(e) => setReturnDate(e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="passengers">Пассажиры</Label>
                    <Input
                      id="passengers"
                      type="number"
                      min="1"
                      max="9"
                      value={passengers}
                      onChange={(e) => setPassengers(parseInt(e.target.value))}
                    />
                  </div>
                </div>

                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                  <Icon name="Search" size={16} className="mr-2" />
                  Найти билеты
                </Button>
              </CardContent>
            </Card>

            {/* Search Results */}
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-900">
                  Найденные рейсы
                </h3>
                <div className="flex items-center space-x-4">
                  <Button variant="outline" size="sm">
                    <Icon name="Filter" size={16} className="mr-2" />
                    Фильтры
                  </Button>
                  <Button variant="outline" size="sm">
                    <Icon name="ArrowUpDown" size={16} className="mr-2" />
                    Сортировка
                  </Button>
                </div>
              </div>

              {mockFlights.map((flight) => (
                <Card key={flight.id} className="bg-white shadow-md hover:shadow-lg transition-shadow">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900">
                            {flight.departure}
                          </div>
                          <div className="text-sm text-gray-500">
                            {flight.from}
                          </div>
                        </div>
                        
                        <div className="flex items-center space-x-2">
                          <div className="w-8 h-px bg-gray-300"></div>
                          <Icon name="Plane" size={16} className="text-blue-600" />
                          <div className="w-8 h-px bg-gray-300"></div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-xl font-bold text-gray-900">
                            {flight.arrival}
                          </div>
                          <div className="text-sm text-gray-500">
                            {flight.to}
                          </div>
                        </div>
                        
                        <div className="text-center">
                          <div className="text-sm text-gray-500">
                            {flight.duration}
                          </div>
                          <div className="text-sm font-medium text-gray-700">
                            {flight.airline}
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-2xl font-bold text-blue-600">
                          {flight.price.toLocaleString()} ₽
                        </div>
                        <div className="space-x-2">
                          <Badge variant="secondary">{flight.type}</Badge>
                          <Button size="sm" className="bg-orange-500 hover:bg-orange-600">
                            Выбрать
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Profile Tab */}
        {activeTab === 'profile' && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                Профиль пользователя
              </h2>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="User" size={20} />
                    <span>Личная информация</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Avatar className="w-16 h-16">
                      <AvatarFallback className="bg-blue-100 text-blue-600 text-xl">
                        АП
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <h3 className="font-semibold text-lg">Алексей Петров</h3>
                      <p className="text-gray-600">alexey.petrov@email.com</p>
                    </div>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-4">
                    <div>
                      <Label>Телефон</Label>
                      <Input value="+7 (999) 123-45-67" className="mt-1" />
                    </div>
                    <div>
                      <Label>Дата рождения</Label>
                      <Input type="date" value="1990-05-15" className="mt-1" />
                    </div>
                    <div>
                      <Label>Документ</Label>
                      <Input value="1234 567890" className="mt-1" />
                    </div>
                  </div>
                  
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Сохранить изменения
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="CreditCard" size={20} />
                    <span>Способы оплаты</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="border rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <Icon name="CreditCard" size={20} className="text-blue-600" />
                        <div>
                          <p className="font-medium">**** **** **** 1234</p>
                          <p className="text-sm text-gray-500">Visa</p>
                        </div>
                      </div>
                      <Badge variant="default">Основная</Badge>
                    </div>
                  </div>
                  
                  <Button variant="outline" className="w-full">
                    <Icon name="Plus" size={16} className="mr-2" />
                    Добавить карту
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-white shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Icon name="Settings" size={20} />
                    <span>Настройки</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span>Уведомления по email</span>
                    <Button variant="outline" size="sm">Вкл</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>SMS уведомления</span>
                    <Button variant="outline" size="sm">Вкл</Button>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Автоматическая регистрация</span>
                    <Button variant="outline" size="sm">Выкл</Button>
                  </div>
                  
                  <Separator />
                  
                  <div className="space-y-2">
                    <h4 className="font-medium">Предпочтения</h4>
                    <div className="grid grid-cols-2 gap-2">
                      <Badge variant="outline">Окно</Badge>
                      <Badge variant="outline">Эконом</Badge>
                      <Badge variant="outline">Багаж</Badge>
                      <Badge variant="outline">Питание</Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        )}

        {/* History Tab */}
        {activeTab === 'history' && (
          <div className="space-y-8">
            <div className="text-center space-y-4">
              <h2 className="text-4xl font-bold text-gray-900">
                История поездок
              </h2>
              <p className="text-xl text-gray-600">
                Все ваши совершенные поездки
              </p>
            </div>

            <div className="space-y-4">
              {mockHistory.map((trip) => (
                <Card key={trip.id} className="bg-white shadow-md">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-6">
                        <div className="bg-green-100 p-3 rounded-full">
                          <Icon name="CheckCircle" size={20} className="text-green-600" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg">{trip.route}</h3>
                          <p className="text-gray-600">{trip.date}</p>
                        </div>
                      </div>
                      
                      <div className="text-right space-y-2">
                        <div className="text-xl font-bold text-gray-900">
                          {trip.price.toLocaleString()} ₽
                        </div>
                        <div className="space-x-2">
                          <Badge variant="default" className="bg-green-100 text-green-800">
                            {trip.status}
                          </Badge>
                          <Button variant="outline" size="sm">
                            <Icon name="Download" size={16} className="mr-2" />
                            Билет
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
              
              <div className="text-center py-8">
                <Icon name="Calendar" size={48} className="mx-auto text-gray-400 mb-4" />
                <p className="text-gray-600">Больше поездок пока нет</p>
                <Button variant="outline" className="mt-4">
                  <Icon name="Plus" size={16} className="mr-2" />
                  Забронировать новый рейс
                </Button>
              </div>
            </div>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Plane" size={24} className="text-blue-400" />
                <h3 className="text-xl font-bold">FlySearch</h3>
              </div>
              <p className="text-gray-400">
                Лучший поиск авиабилетов с удобными фильтрами и сравнением цен
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Сервис</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Поиск билетов</li>
                <li>Онлайн регистрация</li>
                <li>Статус рейса</li>
                <li>Мобильное приложение</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Поддержка</h4>
              <ul className="space-y-2 text-gray-400">
                <li>Центр помощи</li>
                <li>Связаться с нами</li>
                <li>Условия использования</li>
                <li>Политика конфиденциальности</li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>📞 8 (800) 123-45-67</p>
                <p>✉️ help@flysearch.ru</p>
                <p>📍 Москва, Россия</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 FlySearch. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;