import {useState} from 'react'
import {categoriesTags} from '@/shared'

export const useTagFilter = (startCategory: string) => {
  const [selectedCategory, setSelectedCategory] = useState(startCategory)
  const [selectedTags, setSelectedTags] = useState<string[]>([])
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)

  // @ts-ignore
  const filterTags: string[] =
    selectedCategory === 'Все категории' || 'Все результаты'
      ? Array.from(
          new Set(
            categoriesTags
              .filter((obj) => Array.isArray(obj.tags))
              .flatMap((obj) => obj.tags)
          )
        )
      : (categoriesTags.find((obj) => obj.name === selectedCategory)?.tags ??
        [])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setSelectedTags([])
    setIsDropdownOpen(false)
  }

  const toggleDropdown = (a: boolean) => {
    setIsDropdownOpen(a)
  }

  const handleTagClick = (tag: string) => {
    if (!selectedTags.includes(tag)) {
      setSelectedTags((prev) => [...prev, tag])
    }
  }

  const handleRemoveTag = (tag: string) => {
    setSelectedTags((prev) => prev.filter((t) => t !== tag))
  }

  const handleResetTags = () => {
    setSelectedTags([])
  }

  return {
    selectedCategory,
    selectedTags,
    isDropdownOpen,
    filterTags,
    handleCategorySelect,
    toggleDropdown,
    handleTagClick,
    handleRemoveTag,
    handleResetTags,
  }
}
