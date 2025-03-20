# Update package lists
execute 'update_apt' do
    command 'apt-get update'
    action :run
  end
  
# Install Git
package 'git' do
  action :install
end