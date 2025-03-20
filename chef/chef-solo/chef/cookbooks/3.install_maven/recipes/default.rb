# Update package lists
execute 'update_apt' do
    command 'apt-get update'
    action :run
  end
  
# Install Maven
package 'maven' do
  action :install
end