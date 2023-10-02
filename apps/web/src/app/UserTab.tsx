import Link from "next/link";
import dayjs from "dayjs";

import { Card, CardContent, CardHeader, CardTitle } from "~/components/ui/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "~/components/ui/table";
import { serverApiClient } from "~/lib/serverAPIClient";

export default async function UserTab() {
  const users = await serverApiClient().admin.allUsers();
  return (
    <Card className="col-span-4">
      <CardHeader>
        <CardTitle>Users</CardTitle>
      </CardHeader>

      <CardContent className="pl-2">
        <Table>
          <TableCaption>A list of users.</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">ID</TableHead>
              <TableHead>Clerk ID</TableHead>
              <TableHead>First name</TableHead>
              <TableHead>Last name</TableHead>
              <TableHead className="text-right">Created At</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <Link
                key={user.clerkId}
                href={`/dashboard/users/${user.clerkId}`}
                legacyBehavior
              >
                <TableRow>
                  <TableCell className="font-medium">{user.id}</TableCell>
                  <TableCell>{user.clerkId}</TableCell>
                  <TableCell>{user.firstName}</TableCell>
                  <TableCell>{user.lastName}</TableCell>
                  <TableCell className="text-right">
                    {dayjs(user.createdAt).format("YYYY-MM-DD")}
                  </TableCell>
                </TableRow>
              </Link>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
