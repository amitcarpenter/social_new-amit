<ProtectedRoute path="/dashboard" element={<Layout />}>
<Route index element={<Myprofile />} />
<Route path="user" element={<Users />} />
<Route path="integration" element={<Integration />} />
<Route path="schedule" element={<Sedule />} />
<Route path="account" element={<Accountoverview />} />
<Route path="post" element={<Post />} />
<Route path="analytics" element={<Analytics />} />
<Route path="editschedule/:id" element={<Editsedule />} />
</ProtectedRoute>