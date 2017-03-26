import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const todos = [
            { id: 1, title: 'Изучить Angular 2', completed: true },
            { id: 2, title: 'Написать приложение', completed: false },
            { id: 3, title: 'Найти работу по Ангуляр 2', completed: false }
        ];
        return { todos };
    }
}