export const ChildArea = (props) => {
  const { open } = props
  console.log('Childだ')
  return (
    <>
      {open ? (
        <div className="ChildArea">
          <h2>Child Comp</h2>
        </div>
      ) : null}
    </>
  )
}
