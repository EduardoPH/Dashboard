import axios from 'axios'

const api = axios.create({
    baseURL: 'https://insf-vestibular-2022.herokuapp.com'
})


export default class Api {
    async agendadosDoDia(data) {
        let r = await api.get(`/agendadosDoDia?date=${data}`)
        return r.data;
    }

    async comoConheceu() {
        let r = await api.get('/comoConheceu')
        return r.data;
    }

    async agendaramENaoVieram(dateMin, dateMax) {
        let r = await api.get(`/agendaramENaoVieram?dateMin=${dateMin}&dateMax=${dateMax}`);
        return r.data;
    }

    async inscPorCurso() {
        let r = await api.get('/inscricoesPorCurso');
        return r.data;
    }

    async InscPorDia() {
        let r = await api.get('/inscricoesPorDia');
        return r.data;
    }
}
