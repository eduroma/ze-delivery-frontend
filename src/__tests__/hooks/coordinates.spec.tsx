import { act, renderHook } from "@testing-library/react-hooks"

import { useCoordinates, CoordinatesProvider } from '../../hooks/coordinates';


describe('Coordinates hook', () => {
  it('should be able to add coordinates', () => {

    const { result } = renderHook(() => useCoordinates(), {
      wrapper: CoordinatesProvider,
    })

    act(() => {
      result.current.addCoordinates({
        lat: 10,
        lng: -10
      });
    })

    expect(result.current.coordinates).toEqual({
      lat: 10,
      lng: -10
    })
  })
})
