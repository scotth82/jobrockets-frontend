export default function Page({ params }: { params: { userID: string } }) {
    return <div>Welcome user {params.userID}!</div>
  }