import CitySearch from "../CitySearch.vue";
import { describe, it, expect, beforeEach, afterEach } from "vitest";

import { flushPromises, shallowMount } from "@vue/test-utils";

describe("city search weather ", () => {
    let wrapper:any = null;

    beforeEach(() => {
        wrapper = shallowMount(CitySearch)
    })
    afterEach(() => {
        wrapper.unmount()
    })
    it('load the correct elements', () => {
        expect(wrapper.findAll('h2').length).toEqual(1)
        expect(wrapper.findAll('h2').at(0).text()).toMatch('Weather Search')

        expect(wrapper.findAll('label').length).toEqual(1)
        expect(wrapper.findAll('label').at(0).text()).toMatch('City:')

        expect(wrapper.findAll('button').length).toEqual(2)
        expect(wrapper.findAll('button').at(0).text()).toMatch('Search')
        expect(wrapper.findAll('button').at(1).text()).toMatch('Clear')

        expect(wrapper.findAll('button').at(0).element.disabled).toBeTruthy()
        expect(wrapper.findAll('button').at(1).element.disabled).toBeTruthy()
    })

    it('testing textbox value',async ()=>{
        wrapper.vm.inputCity = 'Denver'
        wrapper.vm.searchCity()
        await flushPromises()
        expect(wrapper.emitted('search-city')).toBeTruthy()
        expect(wrapper.emitted('search-city').length).toBe(1)
        expect(wrapper.emitted('search-city')[0][0]).toMatch('Denver')
        expect(wrapper.vm.inputCity).toMatch('Denver')
        expect(wrapper.vm.searchDisabled).toBe(false)
        expect(wrapper.findAll('button').at(0).element.disabled).toBeFalsy()
    })
});
