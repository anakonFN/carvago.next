import type { Meta } from '@storybook/react'

import { SearchForm } from '.'

const meta: Meta = {
  title: 'Widget/SearchForm',
  component: SearchForm,
}

export default meta

export function Default() {
  type IEvent = React.ChangeEvent<HTMLInputElement>
  const [selectedMark, setSelectedMark] = useState({ key: 0, label: '' })
  const [selectedModel, setSelectedModel] = useState({ key: 0, label: '' })
  const [minPrice, setMinPrice] = useState({ key: 0, label: '' })
  const [maxPrice, setMaxPrice] = useState({ key: 0, label: '' })
  const [selectedDriverTypes, setSelectedDriverTypes]
  = useState<number[]>([])
  const [selectedFuels, setSelectedFuels]
  = useState<number[]>([])
  const [selectedTransmissions, setSelectedTransmissions]
  = useState<number[]>([])
  const [selectedColors, setSelecetedColors] = useState<number[]>([])
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const onChangeDriverTypes = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value)
    if (selectedDriverTypes.includes(value)) {
      const filteredValues = selectedDriverTypes.filter((item) => {
        return item !== value
      })
      setSelectedDriverTypes([...filteredValues])
    }
    else { setSelectedDriverTypes([...selectedDriverTypes, value]) }
  }
  const onChangeFuels = (e: IEvent) => {
    const value = parseInt(e.target.value)
    if (selectedFuels.includes(value)) {
      const filteredValues = selectedFuels.filter((item) => {
        return item !== value
      })
      setSelectedFuels([...filteredValues])
    }
    else { setSelectedFuels([...selectedFuels, value]) }
  }
  const onChangeTransmission = (e: IEvent) => {
    const value = parseInt(e.target.value)
    if (selectedTransmissions.includes(value)) {
      const filteredValues = selectedTransmissions.filter((item) => {
        return item !== value
      })
      setSelectedTransmissions([...filteredValues])
    }
    else { setSelectedTransmissions([...selectedTransmissions, value]) }
  }
  const onChangeColor = (e: IEvent) => {
    const value = parseInt(e.target.value)
    if (selectedColors.includes(value)) {
      const filteredValues = selectedColors.filter((item) => {
        return item !== value
      })
      setSelecetedColors([...filteredValues])
    }
    else { setSelecetedColors([...selectedColors, value]) }
  }
  const onChangeOptions = (e: IEvent) => {
    const value = e.target.value
    if (selectedOptions.includes(value)) {
      const filteredValues = selectedOptions.filter((item) => {
        return item !== value
      })
      setSelectedOptions([...filteredValues])
    }
    else { setSelectedOptions([...selectedOptions, value]) }
  }
  return (
      <SearchForm
          handlers={
        {
          onChangeColor,
          onChangeDriverTypes,
          onChangeFuels,
          onChangeOptions,
          onChangeTransmission,
        }
      }
          setters={
        {
          setMaxPrice,
          setMinPrice,
          setSelectedModel,
          setSelectedMark,
        }
      }
          states={
        {
          selectedMark,
          maxPrice,
          minPrice,
          selectedColors,
          selectedDriverTypes,
          selectedModel,
          selectedOptions,
          selectedFuels,
          selectedTransmissions,
        }
      }
      />
  )
}
