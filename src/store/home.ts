import { ActionTree, MutationTree } from 'vuex'

export const state = () => ({
  data: {} as any,
})

export const mutations: MutationTree<any> = {
  setData(state, payload) {
    state.data = payload
  },
}

export const actions: ActionTree<any, any> = {}

export const getters = {}
