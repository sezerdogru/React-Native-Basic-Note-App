import {action, observable} from 'mobx';
import AsyncStorage from "@react-native-community/async-storage";

class AddStore {
    @observable daily = [];
    @observable monthly = [];
    @observable yearly = [];

    @action get_items = async () => {
        let response = await AsyncStorage.getItem('items');
        response = response === null ? [] : JSON.parse(response);
        if (response.length > 0) {
            const date = new Date();
            const month = date.getMonth();
            const day = date.getDate();
            const year = date.getFullYear();
            this.daily = response.filter(item => item.day === day && item.month === month && item.year === year);
            this.monthly = response.filter(item => item.month === month && item.year === year);
            this.yearly = response.filter(item => item.year === year);
        }
    };

    @action addItem = async ({note, noteDetail, date}) => {
        const id = date;
        date = new Date(date);
        const month = date.getMonth();
        const day = date.getDate();
        const year = date.getFullYear();
        let items = await AsyncStorage.getItem('items');
        items = items === null ? [] : JSON.parse(items);
        items.push({note, noteDetail, id, date,month, day, year});
        await AsyncStorage.setItem("items", JSON.stringify(items));
        this.get_items();
    };

    @action delete = async ({id}) => {
        let items = await AsyncStorage.getItem('items');
        items = items === null ? [] : JSON.parse(items);
        items = items.filter(i => i.id !== id);
        await AsyncStorage.setItem('items', JSON.stringify(items));
        this.get_items();
    }
}

export default new AddStore()
