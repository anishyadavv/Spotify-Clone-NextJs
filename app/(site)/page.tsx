import ListItem from '../../components/ListItem';
import Header from '../../components/Header';


export default function Home() {
  return (
    <div className="
    bg-neutral-900
    w-full
    h-full
    overflow-hidden
    overflow-y-auto
    rounded-lg
    ">
      <Header>
        <div className="mt-4">
          <div className="
          text-white
          text-3xl
          font-semibold">
            Welcome back
          </div>
          <div className="
          grid
          grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          2xl:grid-cols-4
          gap-3
          mt-4"
          >
            <ListItem
            image = "/images/liked.png"
            name = "Liked Songs"
            href = "Liked"
            />
          </div>
        </div>
      </Header>

      <div className="mt-2 px-6 mb-7">
          <div className="flex justify-between items-center">
            <h1 className="text-white text-2xl font-semibold">
              Newest Songs
            </h1>
          </div>
          <div>
            List of Songs
          </div>
      </div>

    </div>
  )
}
