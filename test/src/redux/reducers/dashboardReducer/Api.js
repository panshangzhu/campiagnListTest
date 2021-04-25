import { getData } from 'api/Api';

export  const apiGetDashboardData = (id, num) => getData(`/campaigns/${id}`, {
    number: num
});