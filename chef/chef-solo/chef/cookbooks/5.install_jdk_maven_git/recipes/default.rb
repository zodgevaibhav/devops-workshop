# Update package lists
execute 'update_apt' do
    command 'apt-get update'
    action :run
  end

# Install JDK (Default: OpenJDK 11)
package 'openjdk-11-jdk' do
  action :install
end

# Install Maven
package 'maven' do
  action :install
end

# Install Git
package 'git' do
  action :install
end