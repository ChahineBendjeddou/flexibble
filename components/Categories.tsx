'use client'
import { FC } from 'react'
import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { categoryFilters } from '@/constants'
interface CategoriesProps {}

const Categories: FC<CategoriesProps> = ({}) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const category = searchParams.get('category')

  const handleTags = (filter: string) => {
    if (filter === 'All') return router.push(pathname)
    router.push(`${pathname}?category=${filter}`)
  }
  return (
    <div className="flex-wrap w-full gap-5 flexBetween">
      <ul className="flex gap-2 overflow-auto">
        {categoryFilters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => handleTags(filter)}
            className={`${
              category === filter || (!category && filter === 'All')
                ? 'bg-light-white-300 font-medium'
                : 'font-normal'
            } px-4 py-3 rounded-lg capitalize whitespace-nowrap`}
          >
            {filter}
          </button>
        ))}
      </ul>
    </div>
  )
}

export default Categories
