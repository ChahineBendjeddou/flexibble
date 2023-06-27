import { ProjectInterface } from '@/common.types'
import Categories from '@/components/Categories'
import ProjectCard from '@/components/ProjectCard'
import { fetchAllProjects } from '@/lib/actions'
type ProjectSearch = {
  projectSearch: {
    edges: { node: ProjectInterface }[]
    pageInfo: {
      hasPreviousPage: boolean
      hasNextPage: boolean
      startCursor: string
      endCursor: string
    }
  }
}

const Home = async () => {
  const data = (await fetchAllProjects()) as ProjectSearch
  const projectsToDisplay = data?.projectSearch?.edges || []
  if (!projectsToDisplay.length) {
    return (
      <section className="flex-col flexStart paddings">
        Categories
        <p className="text-center no-result-text">
          No projects found, go create some first.
        </p>
      </section>
    )
  }
  return (
    <section className="flex-col mb-16 flex-start paddings">
      <Categories />
      <section className="projects-grid">
        {projectsToDisplay.map(({ node }: { node: ProjectInterface }) => (
          <ProjectCard
            key={node.id}
            id={node.id}
            image={node.image}
            title={node.title}
            name={node?.createdBy?.name}
            avatarUrl={node?.createdBy?.avatarUrl}
            userId={node?.createdBy?.id}
          />
        ))}
      </section>
      <h1>Loadmore</h1>
    </section>
  )
}

export default Home
