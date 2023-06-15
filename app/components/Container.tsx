'use-client'

interface ContainerProps {
  children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
		<div className="
					max-w[2528px]
					mx-auto
					xl:px-28
					md:px-18
					sn:px-2
					px-4
				"
		>
			{children}
		</div>);
};

export default Container;
