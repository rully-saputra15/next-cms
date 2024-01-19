import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';

type UserRowProps = {
  name: string;
  email: string;
  totalViews: number;
};

function UserRow({ name, email, totalViews }: UserRowProps) {
  return (
    <div className="flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-5">
        <Avatar>
          <AvatarImage src="https://source.unsplash.com/random/300x300" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex flex-col">
          <p className="text-md font-semibold">{name}</p>
          <p className="text-sm text-muted-foreground">{email}</p>
        </div>
      </div>
      <p className="text-sm font-bold">{totalViews}</p>
    </div>
  );
}

function TopUsersComponent() {
  return (
    <div className="flex flex-col gap-3">
      <UserRow name="Kevin Kevin" email="coba@gmail.com" totalViews={2000} />
      <UserRow name="Devin Kevin" email="coba@gmail.com" totalViews={5000} />
      <UserRow name="Mavin Kevin" email="coba@gmail.com" totalViews={7000} />
    </div>
  );
}

export default TopUsersComponent;
